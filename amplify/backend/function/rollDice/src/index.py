import sys
import logging
import pymysql
import json

# rds settings
rds_host  = "settlers-db.cohr2v67xbnk.us-east-1.rds.amazonaws.com"
user_name = "admin"
password = "Settler$"
db_name = "Settlers"

logger = logging.getLogger()
logger.setLevel(logging.INFO)


try:
    conn = pymysql.connect(host=rds_host, user=user_name, password=password, database=db_name)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()

logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")

def lambda_handler(event, context):
    """
    This function adds a row to the roll table.
    """
    
    game_id = event["game_id"]
    turn_number = event["turn_number"]
    red_pips = event["red_pips"]
    yellow_pips = event["yellow_pips"]
    color = event["color"]
    
    sql_string = f"""insert into roll (game_id, turn_number, red_pips, yellow_pips, color) 
                               values({game_id},{turn_number},{red_pips},{yellow_pips},'{color}')"""
    print(sql_string)
    with conn.cursor() as cur:
        cur.execute("create table if not exists roll ( game_id int, turn_number int, red_pips int, yellow_pips int, color varchar(255) );")
        cur.execute(sql_string)
        conn.commit()
        # cur.execute("select * from roll")
        logger.info("The following items have been added to the database:")
    conn.commit()

    return "Added row to roll MySQL table"