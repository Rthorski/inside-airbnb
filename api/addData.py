import pandas as pd
from dotenv import dotenv_values
import psycopg2
from sqlalchemy import create_engine

config = dotenv_values(".env")

path = "/Users/rthorski/workspace/inside-airbnb/api/Airbnb listings.csv"

def injectDataInDb(path):
    
    df = pd.read_csv(path)
    host = 'localhost'
    database = config['DB_NAME']
    user = config['DB_USER']
    password = config['DB_PASSWORD']
    port=5434
    engine = create_engine(f'postgresql://{user}:{password}@{host}:{port}/{database}')
    df.to_sql('ny-city', engine, if_exists='replace', index=False)