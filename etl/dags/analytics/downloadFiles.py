import pandas as pandas
import boto3
import requests
from bs4 import BeautifulSoup


def settings(config):

    client = boto3.client(
        's3', 
        aws_access_key_id=config["AWS_ACCES_KEY_ID"],
        aws_secret_access_key=config["AWS_SECRET_ACCESS_KEY"]
    )

def getLinks():

    page_url = "http://insideairbnb.com/get-the-data"

    response = requests.get(page_url)
    soup = BeautifulSoup(response.text, features="lxml")
    links = soup.find_all('a', href=True)
    listings = [link['href'] for link in links if "listings.csv" in link.text]
    listings = [link for link in listings if not ".gz" in link]
    test = listings[:2]


