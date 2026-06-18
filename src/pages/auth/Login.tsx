    import LoginForm from "./LoginForm";
    import Picture from "./Picture";
    import Them from "./Them";

  export default function Login() {
  return (
    <main className="flex items-center justify-center md:h-120 my-10 px-4 md:px-8">
      <div className="bg-white dark:bg-dark_green  border border-black/8 ... rounded-md p-6">
        <Them />
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Picture />
          <LoginForm />
        </div>
      </div>
    </main>
  );
}