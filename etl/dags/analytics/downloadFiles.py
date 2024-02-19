import pandas as pandas
import boto3
import requests
from bs4 import BeautifulSoup
from dotenv import dotenv_values


def settings(config):

    client = boto3.client(
        's3', 
        aws_access_key_id=config["AWS_ACCES_KEY_ID"],
        aws_secret_access_key=config["AWS_SECRET_ACCESS_KEY"]
    )