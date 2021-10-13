import gym
import numpy as np
from numpy import random
env = gym.make('FrozenLake-v0')
#env = env.unwrapped

print(env.observation_space)
print(env.action_space)

print(env.unwrapped.P)

def play_policy(env, policy, render=False):
    total_reward = 0.0
    observation = env.reset()
    while True:
        if render:
            env.render()
        action = np.random.choice(env.action_space.n, p = policy[observation])
        observation, reward, done , _ = env.step(action)
        total_reward += reward
        if done:
            break
    return total_reward


random_policy = np.ones((env.unwrapped.nS, env.unwrapped.nA)) / env.unwrapped.nA

episode_rewards = [play_policy(env, random_policy, render=True) for _ in range(100)]
print("Random policy rewards: {}".format(np.mean(episode_rewards)))
