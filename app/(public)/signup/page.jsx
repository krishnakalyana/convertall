import ModeToggle from "@/components/elements/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
export default function Signup() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Card className="min-w-[25%] p-1 md:p-4 h-fit">
        <CardHeader className="">
          <CardTitle className="flex justify-between items-center ">
            Sign up
            <ModeToggle />
          </CardTitle>
          <CardDescription>Get ready to join our Fam!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 ">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                />
                <Label htmlFor="password" className="pt-3">
                  Password
                </Label>
                <Input id="password" type="password" placeholder="*******" />
                <Label htmlFor="cnfpassword" className="pt-3">
                  Confirm Password
                </Label>
                <Input id="cnfpassword" type="password" placeholder="*******" />
              </div>
              <div className="flex flex-col space-y-1.5"></div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <Button className="w-full">Signup</Button>
          <p className="p-1">Or</p>
          <Button className="w-full">Signup via Google</Button>
          <Separator />
          <div className="w-full flex justify-end flex-col pt-2">
            <p className="font-light text-sm pb-1">Already have a account?</p>

            <Link href={"/login"}>Sign in here.</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
