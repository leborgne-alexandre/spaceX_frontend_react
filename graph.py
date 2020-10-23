#commande pour lancer le truc : streamlit run graph.py

import streamlit as st
import pandas as pd
import numpy as np
import altair as alt
import pydeck as pdk

def load_data(nrows):
    data = pd.read_json("https://api.spacexdata.com/v3/launches")
    data["launch_date_utc"] = pd.to_datetime(data["launch_date_utc"])
    return data

data = load_data(100000)

row1_1, row1_2 = st.beta_columns((3,2))

with row1_1:
    st.title("Choix de l'année")
    YEAR_SELECTED = st.slider("Année", 2006, 2020)

with row1_2:
    st.write(
    """
    ##
    Visualisation des lancements et du nombre de lancement au cours des années
        """)

filtered = data[
    (data["launch_date_utc"].dt.year >= YEAR_SELECTED) & (data["launch_date_utc"].dt.year < (YEAR_SELECTED + 1))
    ]

hist = np.histogram(filtered["launch_date_utc"].dt.month, bins=12, range=(1, 12))[0]
chart_data = pd.DataFrame({"launch_date_utc": (1,2,3,4,5,6,7,8,9,10,11,12), "mission_name": hist})

st.write("**Vue de l'année %i and %i**" % (YEAR_SELECTED, (YEAR_SELECTED + 1)))

st.altair_chart(alt.Chart(chart_data)
.mark_area(
        interpolate='step-after',
    )
    .encode(
        x=alt.X("launch_date_utc:Q", scale=alt.Scale(nice=False)),
        y=alt.Y("mission_name:Q"),
        tooltip=['launch_date_utc', 'mission_name']
).configure_mark(
        opacity=0.5,
        color='red'
    ), use_container_width=True)