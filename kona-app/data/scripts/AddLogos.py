import json
import collections
import os.path

dir = os.path.dirname(__file__)
filename = os.path.join(dir, '../kona_orgs.json')

with open(filename) as input:
    data = json.load(input, object_pairs_hook=collections.OrderedDict)

for org in data:
    logo = '{}.png'.format(org['ID'])
    if os.path.exists("../../assets/logos/{}".format(logo)):
        org["Logo"] = logo
    else:
        org["Logo"] = "no_logo.png"

with open(filename, "w") as output:
    str = json.dumps(data, indent=2, ensure_ascii=False).encode('utf8')
    output.write(str)
