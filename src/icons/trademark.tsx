"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.5 9h5m-2.5 0v6"}],["path",{"d":"M13 15v-6l3 4l3 -4v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11.75,12],"a":0.08}];

export const TrademarkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrademarkIcon.displayName = "TrademarkIcon";
