import random
import gym
import math
import numpy as np
from collections import deque
import tensorflow as tf
from tensorflow.keras import optimizers
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam

EPOCHS = 1000
THRESHOLD = 195
MONITOR = True

class DQN:
    def __init__(self, env_string, batch_size=64):
        self.memory = deque(maxlen=100000)
        self.env = gym.make(env_string)
        self.input_size = self.env.observation_space.shape[0]
        self.action_size = self.env.action_space.n

        self.batch_size = batch_size
        self.gamma = 1.0
        self.epsilon = 1.0
        self.epsilon_min = 0.01
        self.epsilon_decay = 0.995

        alpha = 0.01
        alpha_decay = 0.01

        # Init model
        self.model = Sequential()
        self.model.add(Dense(24, input_dim=self.input_size,activation='tanh'))
        self.model.add(Dense(48, activation='tanh'))
        self.model.add(Dense(self.action_size, activation='linear'))
        self.model.compile(loss='mse', optimizer=Adam(lr=alpha,decay=alpha_decay))

    def remember(self, state, action, reward, next_state, done):
        self.memory.append((state, action, reward, next_state, done))

    def replay(self, batch_size):
        x_batch, y_batch = [], []
        minibatch = random.sample(self.memory, min(len(self.memory), batch_size))
        for state, action, reward, next_state, done in minibatch:
            y_target = self.model.predict(state)
            y_target[0][action] = reward if done else reward + self.gamma * np.max(self.model.predict(next_state)[0])
            x_batch.append(state[0])
            y_batch.append(y_target[0])
        self.model.fit(np.array(x_batch),np.array(y_batch),batch_size=len(x_batch),verbose=0)

    def choose_action(self, state, epsilon):
        if np.random.random() <= epsilon:
            return self.env.action_space.sample()
        else:
            return np.argmax(self.model.predict(state))