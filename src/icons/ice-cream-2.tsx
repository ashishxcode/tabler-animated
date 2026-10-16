"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17.657 11a6 6 0 1 0 -11.315 0"}],["path",{"d":"M6.342 11l5.658 11l5.657 -11l-11.315 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.5],"a":0.08}];

export const IceCream2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IceCream2Icon.displayName = "IceCream2Icon";
