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
