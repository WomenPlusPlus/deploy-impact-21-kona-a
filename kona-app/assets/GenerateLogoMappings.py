import json

with open('./assets/kona_orgs_2.json') as input:
    data = json.load(input)

with  open("./assets/LogoMappings.js", "w") as output:
    output.write('export const LogoMappings = {\n')
    for org in data:
        if 'Logo' in org:
            output.write("  {}: require('../assets/logos/{}'),\n".format(org['ID'], org['Logo']))
    output.write('};\n')