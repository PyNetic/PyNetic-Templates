from datetime import date

import create_license

current_year = date.today().year

create_license._create_license(
    "{{cookiecutter.license}}",
    "{{cookiecutter.project_name.lower().replace(' ', '-').replace('-', '_')/LICENSE}}",
)
