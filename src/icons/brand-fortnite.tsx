"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1l0 -18"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.75,12],"a":0.1}];

export const BrandFortniteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandFortniteIcon.displayName = "BrandFortniteIcon";
