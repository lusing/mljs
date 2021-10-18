import gym
import numpy as np

env = gym.make('Blackjack-v0')

observation = env.reset()
print("Observation={}".format(observation))
while True:
    print('Player={}, Dealer{}'.format(env.player,env.dealer))
    action = np.random.choice(env.action_space.n)
    print('action={}'.format(action))
    observation, reward, done, _ = env.step(action)
    print('obervation={}, reward={}, done={}'.format(observation,reward,done))
    if done:
        break


def ob2state(observation):
    return(observation[0],observation[1],observation[2])


# 同策回合更新策略评估
def evaluate_action_monte_carlo(env,policy,episode_num=500000):
    q = np.zeros_like(policy)
    c = np.zeros_like(policy)
    for _ in range(episode_num):
        # play one episode
        state_actions = []
        observation = env.reset()
        while True:
            state = ob2state(observation)
            action = np.random.choice(env.action_space.n, p= policy[state])
            state_actions.append((state,action))
            observation, reward, done, _ = env.step(action)
            if done:
                break
        g = reward
        for (state,action) in state_actions:
            c[state][action] += 1.0
            q[state][action] += (g - q[state][action]) / c[state][action]
    return q


def plot(data):
    fig, axes = plt.subplots(1,2,figsize=(9,4))
    titles = ['without ace','with ace']
    have_aces = [0,1]
    extent = [12,22,1,11]
    for title, have_ace, axis in zip(titles, have_aces, axes):
        dat = data[extent[0]:extent[1], extent[2]:extent[3], have_ace].T
        axis.imshow(dat, extent=extent, origin='lower')
        axis.set_xlabel('player sum')
        axis.set_ylabel('dealer showing')
        axis.set_title(title)


# 带起始探索的同策回合更新
def monte_carlo_with_exploring_start(env, episode_num=500000):
    policy = np.zeros((22,11,2,2))
    policy[:,:,:,1] = 1.0
    q = np.zeros_like(policy)
    c = np.zeros_like(policy)
    for _ in range(episode_num):
        # 随机选择起始状态和起始动作
        state = (
            np.random.randint(12,22),
            np.random.randint(1,11),
            np.random.randint(2)
        )
        action = np.random.randint(2)

        # play 
        env.reset()
        if state[2]: # Ace
            evn.player = [1, state[0]-11]
        else:
            if state[0] == 21:
                env.player=[10,9,2]
            else:
                env.player = [10, state[0]-10]
        env.dealer[0] = state[1]
        state_actions =[]
        while True:
            state_actions.append((state,action))
            observation, reward, done, _ = env.step(action)
            if done:
                break
            state = ob2state(observation)
            action = np.random.choice(env.action_space.n, p= policy[state])
        g = reward
        for state, action in state_actions:
            c[state][action] += 1.0
            q[state][action] += (g-q[state][action]) / c[state][action]
            a = q[state].argmax()
            policy[state] = 0.0 
            policy[state][a] = 1.0
    return policy, q

