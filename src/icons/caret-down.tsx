"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 10l6 6l6 -6h-12"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,13],"d":[0,1.92]}];

export const CaretDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CaretDownIcon.displayName = "CaretDownIcon";
