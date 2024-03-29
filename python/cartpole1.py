import gym

def cartpole():
    environment = gym.make('CartPole-v1')
    environment.reset()
    for i in range(1000):
        # environment.render()
        action = environment.action_space.sample()
        observation, reward, done, info = environment.step(action)
        print("Step {}:".format(i))
        print("action: {}:".format(action))
        print('observation: {}'.format(observation))
        print('reward: {}'.format(reward))
        print('done: {}'.format(done))
        print('info: {}'.format(info))
        if done:
            break

if __name__ == '__main__':
    cartpole()
