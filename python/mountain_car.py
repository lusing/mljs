import gym
env = gym.make('MountainCar-v0')
print('Observation_space={}'.format(env.observation_space))
print('Action_space={}'.format(env.action_space))
print('Observation_space={} - {}'.format(env.observation_space.low,env.observation_space.high))
print('actions={}'.format(env.action_space.n))
