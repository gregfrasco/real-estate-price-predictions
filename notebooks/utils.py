from glob import glob
import pandas as pd
from typing import List


def find_csv(filepath: str) -> List[str]:
    full_path = filepath + '/**/**/*'
    return [f for f in glob(full_path) if f[-4:] == '.csv']


def get_data(filepath: str) -> pd.DataFrame:
    li = []
    files = find_csv(filepath)
    for filepath in files:
        df = pd.read_csv(filepath, index_col=None, encoding='ISO-8859-1')
        # Some files have index column that is unnamed
        df = df.drop(df.filter(regex='Unnamed').columns, axis=1)
        # Some files have an index column with the header of 0
        df = df.drop(df.filter(regex='0').columns, axis=1)
        li.append(df)
    return pd.concat(li, axis=0, ignore_index=True)
