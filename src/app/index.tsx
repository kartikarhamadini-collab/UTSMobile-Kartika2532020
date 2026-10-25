import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoCard from "../components/InfoCard";

const DAFTAR_MAHASISWA = [
  { id: "1", nama: "Alifia Putri", prodi: "Sistem Informasi" },
  { id: "2", nama: "Budi Santoso", prodi: "Teknologi Informasi" },
  { id: "3", nama: "Citra Dewi", prodi: "Sistem Informasi" },
  { id: "4", nama: "Dimas Anggara", prodi: "Teknik Informatika" },
  { id: "5", nama: "Eka Nur Safitri", prodi: "Sistem Informasi" },
];

export default function HomeScreen() {
  const [keyword, setKeyword] = useState("");
  const [detail, setDetail] = useState("");

  const mahasiswaFilter = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(keyword.toLowerCase()),
  );

  const tampilkanDetail = (judul: string) => {
    setDetail(judul);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.content}
        data={mahasiswaFilter}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <Text style={styles.header}>UTS Pemrograman Mobile</Text>

            <Text style={styles.sectionTitle}>
              Soal 1: Custom Reusable Component
            </Text>

            <InfoCard
              title="Membuat Halaman Login"
              status="selesai"
              onPress={() => tampilkanDetail("Membuat Halaman Login")}
            />

            <InfoCard
              title="Membuat Fitur Pencarian"
              status="proses"
              onPress={() => tampilkanDetail("Membuat Fitur Pencarian")}
            />

            <Text style={styles.sectionTitle}>Soal 2: Direktori Mahasiswa</Text>

            <TextInput
              style={styles.input}
              placeholder="Cari nama mahasiswa..."
              placeholderTextColor="#64748B"
              value={keyword}
              onChangeText={setKeyword}
            />

            <Text style={styles.listTitle}>
              Daftar Mahasiswa ({DAFTAR_MAHASISWA.length})
            </Text>

            {detail !== "" && (
              <View style={styles.detailBox}>
                <Text style={styles.detailTitle}>Detail Informasi</Text>

                <Text style={styles.detailText}>{detail}</Text>

                <Text style={styles.closeButton} onPress={() => setDetail("")}>
                  Tutup
                </Text>
              </View>
            )}
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.nama}</Text>

            <Text style={styles.studentProdi}>{item.prodi}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FB",
  },
  list: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#17365D",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#17365D",
    marginTop: 16,
    marginBottom: 8,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#17365D",
    marginTop: 8,
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    color: "#1E293B",
  },
  studentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  studentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
  },
  studentProdi: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
  emptyText: {
    textAlign: "center",
    color: "#DC2626",
    marginTop: 20,
    fontSize: 15,
  },
  detailBox: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#2563EB",
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#17365D",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#1E293B",
    marginBottom: 16,
  },
  closeButton: {
    color: "#2563EB",
    fontWeight: "bold",
    textAlign: "right",
    paddingVertical: 6,
  },
});
