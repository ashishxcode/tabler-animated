"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 14l-6 -6l-6 6h12"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,11],"d":[0,-1.92]}];

export const CaretUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CaretUpIcon.displayName = "CaretUpIcon";
