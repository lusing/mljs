import gym
import keras 

n_inputs = 4

model = keras.models.Sequential(
    [
        keras.layers.Dense(5, activation='elu', input_shape=[n_inputs]),
        keras.layers.Dense(5, activation='sigmoid'),
    ]
)

env = gym.make('CartPole-v1')
obs = env.reset()

def basic_policy(obs):
    angle = obs[2]
    return 0 if angle < 0 else 1


totals = []

for episode in range(500):
    episode_rewards = 0
    obs = env.reset()
    for step in range(200):
        action = basic_policy(obs)
        obs, reward, done, info = env.step(action)
        env.render()
        episode_rewards += reward
        if done:
            break
    totals.append(episode_rewards)

print(totals)

