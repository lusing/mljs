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
