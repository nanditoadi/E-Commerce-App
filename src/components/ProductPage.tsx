"use client";

import Image from "next/image";
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
import PaymentFormDialog from "./PaymentFormDialog";
import { createMidtransTransaction } from "@/lib/action/create-midtrans-transaction";

interface ProductPageProps {
  name: string;
  price: number;
  imageUrl: string;
  description: ReactNode;
}

export default function ProductPage({ name, price, imageUrl, description }: ProductPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image Section */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-white shadow-lg">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share product</span>
              </Button>
            </div>
          </div>

          {/* Thumbnail images - placeholder for multiple product images */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-md bg-gray-100 border-2 border-transparent hover:border-primary cursor-pointer"
              >
                <Image
                  src={`/placeholder.svg?height=150&width=150`}
                  alt={`${name} view ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              New Arrival
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(4.0) • 128 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">IDR{price.toFixed(2)}</span>
              <span className="text-lg text-gray-500 line-through">
                IDR{(price * 1.2).toFixed(2)}
              </span>
              <Badge variant="destructive">20% OFF</Badge>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <div className="text-gray-600 leading-relaxed">{description}</div>
          </div>

          {/* Product Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Truck className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-sm">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Shield className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-sm">2 Year Warranty</p>
                  <p className="text-xs text-gray-500">Full coverage</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <RotateCcw className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium text-sm">30-Day Returns</p>
                  <p className="text-xs text-gray-500">No questions asked</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="font-medium">
                Quantity:
              </label>
              <select
                id="quantity"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                defaultValue="1"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <PaymentFormDialog grossAmount={price} />
            </div>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600 font-medium">In Stock - Ready to Ship</span>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-6 space-y-2">
            <p className="text-sm text-gray-600">
              <strong>SKU:</strong> WH-001-BLK
            </p>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> Electronics, Audio
            </p>
            <p className="text-sm text-gray-600">
              <strong>Tags:</strong> Wireless, Premium, Noise Cancelling
            </p>
          </div>
        </div>
      </div>

      {/* Additional Product Information Tabs */}
      <div className="mt-16 border-t pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Specifications</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <strong>Battery Life:</strong> Up to 30 hours
              </li>
              <li>
                <strong>Charging Time:</strong> 2 hours
              </li>
              <li>
                <strong>Weight:</strong> 250g
              </li>
              <li>
                <strong>Connectivity:</strong> Bluetooth 5.0
              </li>
              <li>
                <strong>Frequency Response:</strong> 20Hz - 20kHz
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">What's in the Box</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Premium Wireless Headphones</li>
              <li>• USB-C Charging Cable</li>
              <li>• 3.5mm Audio Cable</li>
              <li>• Carrying Case</li>
              <li>• User Manual</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">Need help? Our customer support team is here for you.</p>
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
              <Button variant="outline" size="sm">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
