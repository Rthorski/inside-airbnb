from airflow.decorators import dag, task
import pendulum
from pprint import pprint
import sys
import os
from analytics.downloadFiles import getLinks
from dotenv import dotenv_values



@dag(
    schedule=None, 
    start_date=pendulum.datetime(2021, 1, 1),
    catchup=False,
    tags=["inside-airbnb"],
)

def dashboarding_inside_data():

    env_path = dotenv_values('dags/.env')

    @task
    def download_files():
        getLinks()


    download_files()
dashboarding_inside_data()

