"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetTopTraders } from "../services/get-copy-trades";
import { useCopyTrader } from "../services/copy-trade";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function TopTraders() {
  const { data, error } = useGetTopTraders();
  const response = data;
  const traders = response?.data;
  const copyTraderMutation = useCopyTrader();

  const [loadingTraders, setLoadingTraders] = useState({});

  const handleCopyTrade = async (userId) => {
    try {
      setLoadingTraders((prev) => ({ ...prev, [userId]: true }));
      await copyTraderMutation.mutateAsync({
        url: `https://block-traders.com.blocktraders.academy/api/copy-trader/${userId}`,
      });
      const trader = traders?.find((t) => t.user_id === userId);
      toast.success(`Successfully copied ${trader?.user_name}'s trades`);
    } catch (error) {
      toast.error("Failed to copy trader");
    } finally {
      setLoadingTraders((prev) => ({ ...prev, [userId]: false }));
    }
  };

  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!traders?.length) return <div>No traders found</div>;

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
                  <div>
                    <p className="text-sm text-muted-foreground">Equity</p>
                    <p className="text-lg font-medium">
                      ${trader.equity.toLocaleString()}
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
                </div>
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">
                    Return on Equity
                  </p>
                  <p className="text-lg font-medium text-green-500">
                    {trader.equity_growth}
                  </p>
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => handleCopyTrade(trader.user_id)}
                  disabled={loadingTraders[trader.user_id]}
                >
                  {loadingTraders[trader.user_id] ? "Copying..." : "Copy Trade"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
