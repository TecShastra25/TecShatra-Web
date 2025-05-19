import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import FloatingShape from "@/components/kokonutui/FloatingShape";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub, FaFacebook } from "react-icons/fa";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "../firebase/firebase"; // Import providers
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      router.push("/dashboard");
    } catch (firebaseError) {
      setError(firebaseError.message);
      console.error("Error logging in:", firebaseError);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError("");
    try {
      let result;
      if (provider === "google") {
        result = await signInWithPopup(auth, googleProvider);
      } else if (provider === "facebook") {
        result = await signInWithPopup(auth, facebookProvider);
      } else if (provider === "github") {
        result = await signInWithPopup(auth, githubProvider);
      } else if (provider === "apple") {
        // Apple Sign-In requires more setup (Sign in with Apple REST API)
        setError("Apple Sign-In not yet implemented.");
        setLoading(false);
        return;
      }

      if (result?.user) {
        console.log(`Login with ${provider} successful!`, result.user);
        router.push("/dashboard");
      }
    } catch (firebaseError) {
      setError(`Error logging in with ${provider}: ${firebaseError.message}`);
      console.error(`Error logging in with ${provider}:`, firebaseError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#030303] flex items-center justify-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <FloatingShape />
      </div>
      {/* Floating Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-4xl bg-transparent backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl md:flex-row"
      >
        {/* Floating Image with Animation */}
        <div className="hidden md:block w-1/2 relative">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full overflow-hidden rounded-tl-2xl rounded-bl-2xl"
          >
            <Image
              src="/images/Login.jpg"
              alt="Login"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="w-full md:w-1/2 p-8 text-white">
          <h2
            className="text-3xl font-bold text-center mb-2
                             bg-gradient-to-r from-primary to-secondary
                             bg-clip-text text-transparent glow
                             drop-shadow-lg"
          >
            Welcome Back
          </h2>
          <p className="text-center text-gray-300 mb-4 glowing-slogan">
            Sign in to your account
          </p>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-red-400 text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin("google")}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300"
            >
              <FcGoogle size={18} />
              Continue with Google
            </button>

            <button
              onClick={() => handleSocialLogin("facebook")}
              className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 px-4 rounded-lg hover:bg-[#166fe5] transition-colors"
            >
              <FaFacebook size={18} />
              Continue with Facebook
            </button>

            <button
              onClick={() => handleSocialLogin("apple")}
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-[#1d1d1d] transition-colors"
            >
              <FaApple size={18} />
              Continue with Apple
            </button>

            <button
              onClick={() => handleSocialLogin("github")}
              className="w-full flex items-center justify-center gap-2 bg-[#24292e] text-white py-2 px-4 rounded-lg hover:bg-[#2f363d] transition-colors"
            >
              <FaGithub size={18} />
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-3 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 text-white placeholder:text-white/60 rounded-lg px-4 py-3"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/10 text-white placeholder:text-white/60 rounded-lg px-4 py-3"
            />

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-400 hover:underline mt-1 inline-block"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="mt-4 text-center text-gray-300">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
