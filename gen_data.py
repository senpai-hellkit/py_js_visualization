import os
import pandas as pd
from typing import List


path_to_data: str = os.path.join(os.getcwd(), 'data', 'Доля геополитических блоков.csv')
path_to_js_file: str = os.path.join(os.getcwd(), 'static', 'scripts', 'variablesData.js')

df: pd.DataFrame = pd.read_csv(path_to_data, skiprows=2)
df.rename(columns={'Unnamed: 0': 'year'}, inplace=True)

labels: List[str] = df.columns[1:].to_list()
data_by_one: List[int] = df[labels[0]].to_list()
data_by_two: List[int] = df[labels[1]].to_list()

label: str = f"let labels = {labels};"
label_name: str = "let labelName = 'Доля геополитических блоков';"
data: str = f"let data = [{sum(data_by_one)}, {sum(data_by_two)}];"
result = '// gen by python\n{}\n{}\n{}\n// py data gen'


with open(path_to_js_file, 'w', encoding='utf') as f_out:
    f_out.write(result.format(label, label_name, data))
