import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="bg-home flex flex-col min-h-screen">
      <Header />
      <Main />
    </div>
  );
}
