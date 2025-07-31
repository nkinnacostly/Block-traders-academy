"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetTopTraders } from "../services/get-copy-trades";
import { useCopyTrader } from "../services/copy-trade";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

export default function TopTraders() {
  const { data, error } = useGetTopTraders();
  const response = data;
  const traders = response?.data;
  const copyTraderMutation = useCopyTrader();

  const [loadingTraders, setLoadingTraders] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTraderId, setSelectedTraderId] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleCopyTradeClick = (userId) => {
    setSelectedTraderId(userId);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyTrade = async () => {
    if (!formData.email || !formData.name) {
      toast.error("Please fill in both email and name");
      return;
    }

    try {
      setLoadingTraders((prev) => ({ ...prev, [selectedTraderId]: true }));
      await copyTraderMutation.mutateAsync({
        url: `https://block-traders.com.blocktraders.academy/api/copy-trader/${selectedTraderId}`,
        data: {
          email: formData.email,
          name: formData.name,
        },
      });
      const trader = traders?.find((t) => t.user_id === selectedTraderId);
      toast.success(`Successfully copied ${trader?.user_name}'s trades`);
      setIsModalOpen(false);
      setFormData({ email: "", name: "" });
    } catch (error) {
      toast.error("Failed to copy trader");
    } finally {
      setLoadingTraders((prev) => ({ ...prev, [selectedTraderId]: false }));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ email: "", name: "" });
    setSelectedTraderId(null);
  };

  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!traders?.length)
    return (
      <div className="w-full py-16 px-4 flex items-center justify-center border ">
        <div className="text-center max-w-md">
          {/* 3D Style Empty State Illustration */}
          <div className="relative mb-8">
            {/* Main 3D Card */}
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl transform rotate-3 border-2 border-gray-300 relative">
              {/* Card Content */}
              <div className="absolute inset-2 bg-white rounded-xl shadow-inner">
                <div className="flex flex-col items-center justify-center h-full space-y-2">
                  {/* Chart Lines */}
                  <div className="w-12 h-8 flex items-end justify-center space-x-1">
                    <div className="w-1 bg-gray-300 h-2 rounded-full"></div>
                    <div className="w-1 bg-gray-300 h-4 rounded-full"></div>
                    <div className="w-1 bg-gray-300 h-1 rounded-full"></div>
                    <div className="w-1 bg-gray-300 h-3 rounded-full"></div>
                    <div className="w-1 bg-gray-300 h-2 rounded-full"></div>
                  </div>
                  {/* User Icon */}
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 rounded-full shadow-lg border-2 border-blue-200"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-100 rounded-full shadow-lg border-2 border-green-200"></div>

            {/* Connection Lines */}
            <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-x-8 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2 -translate-y-8"></div>
          </div>

          {/* Text Content */}
          <h3 className="text-2xl font-bold  mb-3">No Traders Available</h3>
          <p className="mb-6 leading-relaxed">
            We&apos;re currently setting up our copy trading network. Check back
            soon to discover top-performing traders and start copying their
            strategies.
          </p>

          {/* Action Button */}
          {/* <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button> */}
        </div>
      </div>
    );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Copy Trading</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="mt-3 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {traders.map((trader) => (
            <Card key={trader.user_id} className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{trader.user_name}</h3>
                  <span className="text-sm text-muted-foreground">
                    Level {trader.trader_level}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      Return on Equity
                    </p>
                    <p className="text-lg font-medium text-green-500">
                      {trader.equity_growth}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground text-right">
                      5-Day Rolling Return
                    </p>
                    <p className="text-lg font-medium text-green-500 text-right">
                      {trader.one_week_gain.toLocaleString()}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      Last Trade Date
                    </p>
                    <p className="text-lg font-medium text-green-500">
                      {trader.last_trade_date[0]}
                    </p>
                  </div>
                  <div className="mt-2 text-right">
                    <p className="text-sm text-muted-foreground">Win Rate</p>
                    <p className="text-lg font-medium text-green-500">
                      {trader.win_rate.toLocaleString()}
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full mt-4"
                  onClick={() => handleCopyTradeClick(trader.user_id)}
                  disabled={loadingTraders[trader.user_id]}
                >
                  {loadingTraders[trader.user_id]
                    ? "Copying..."
                    : "Copy Trader"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Copy Trade Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <input
              inputText="Email"
              name="email"
              onChange={handleInputChange}
              placeholder="Enter your email"
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              inputText="Name"
              name="name"
              onChange={handleInputChange}
              placeholder="Enter your name"
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleCopyTrade}>Copy Trader</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
