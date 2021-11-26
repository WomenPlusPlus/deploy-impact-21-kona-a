import json
import os.path

dir = os.path.dirname(__file__)
filename = os.path.join(dir, '../kona_orgs.json')
logos = os.path.join(dir, '../LogoMappings.js')

with open(filename) as input:
    data = json.load(input)

with  open(logos, "w") as output:
    output.write('export const LogoMappings = {\n')
    for org in data:
        if 'Logo' in org:
            output.write("  {}: require('../assets/logos/{}'),\n".format(org['ID'], org['Logo']))
    output.write('};\n')
    