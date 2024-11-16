"use client"

import { UploadDropzone } from "@/app/lib/uploadthing";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ProductCreateRount() {
  return (
    <div>
      <form>
        <div className="flex itmes-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/products">
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
        </div>

        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>Create your products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Product Name"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Description</Label>
                <Input placeholder="Write your description here ..." />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Price</Label>
                <Input type="number" placeholder="Insert price ..." />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Featured Product</Label>
                <Switch />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Images</Label>
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    alert("Finished uploading");
                  }}
                  onUploadError={() => {
                    alert("Something went wrong")
                  }}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create Product</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
