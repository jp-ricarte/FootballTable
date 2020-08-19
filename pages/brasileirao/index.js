import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import api from "../../services/api.js";

export default function App({ navigation }) {
  const [tabela, setTabela] = useState([]);

  async function getTabela() {
    try {
      const res = await api.get("competitions/2013/standings", {
        headers: { "X-Auth-Token": "88087b1032c845ffacf43c6230cbd5bf" },
      });

      setTabela(res.data.standings[0].table);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTabela();
  }, []);

  console.log(tabela);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brasileirão Série A</Text>
      <View style={styles.table}>
        <View style={styles.lineHead}>
          <View style={styles.position}>
            <Text></Text>
          </View>
          <View style={styles.row}>
            <Text></Text>
          </View>
          <View style={styles.points}>
            <Text style={styles.pointsText}>PTS</Text>
          </View>
          <View style={styles.points}>
            <Text style={styles.pointsText}>J</Text>
          </View>
          <View style={styles.points}>
            <Text style={styles.pointsText}>SG</Text>
          </View>
        </View>
        {tabela.map((clube) => (
          <View style={styles.line}>
            <View style={styles.position}>
              <Text>{clube.position}</Text>
            </View>
            <View style={styles.row}>
              <Text>{clube.team.name}</Text>
            </View>
            <View style={styles.points}>
              <Text style={styles.pointsText}>{clube.points}</Text>
            </View>
            <View style={styles.points}>
              <Text style={styles.pointsText}>{clube.playedGames}</Text>
            </View>
            <View style={styles.points}>
              <Text style={styles.pointsText}>{clube.goalDifference}</Text>
            </View>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  position: {
    padding: 20,
    paddingLeft: 10,
    minWidth: 55,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "green",
    width: "100%",
    color: "#fff",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    padding: 20,
    minWidth: 150,
    paddingRight: 0,
    paddingLeft: 0,
  },
  points: {
    padding: 15,
    maxWidth: 50,
  },
  pointsText: {
    fontWeight: "700",
    color: "#565c5d",
    minWidth: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    display: "flex",
    width: "100%",
    overflowX: "scroll",
  },
  lineHead: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 0.6,
    borderTopColor: "#ededef",
    backgroundColor: "#fff",
  },
  line: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 0.6,
    borderTopColor: "#ededef",
    backgroundColor: "#fff",
  },
});
