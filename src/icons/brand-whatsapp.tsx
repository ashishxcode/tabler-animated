"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"}],["path",{"d":"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12.02],"a":0.1}];

export const BrandWhatsappIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandWhatsappIcon.displayName = "BrandWhatsappIcon";
