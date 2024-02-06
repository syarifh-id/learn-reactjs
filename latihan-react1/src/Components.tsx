const Heading = (props) => {
  //destructuring the props
  const { color = "text-zinc-700", children = "Judul default" } = props;
  return (
    <h1 className={`font-extrabold font-serif ${color}`}>Ini {children}</h1>
  );
};

// Bisa langsung menuliskan export
export default function Components() {
  return (
    <div className="bg-slate-400 min-h-screen">
      <Heading color="text-blue-800">Judul Utama</Heading>
      <Heading color="text-red-700">Judul Kedua</Heading>
      <Heading></Heading>
    </div>
  );
}
