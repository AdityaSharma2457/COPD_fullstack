# Scaling / encoding
from sklearn.preprocessing import StandardScaler
import numpy as np

def preprocess_data(data):
    # Example preprocessing logic
    scaler = StandardScaler()
    features = np.array([data['age'], len(data['symptoms'])])
    return scaler.fit_transform(features.reshape(1, -1))