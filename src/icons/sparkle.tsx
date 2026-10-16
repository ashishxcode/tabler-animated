"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12c-6.597 0 -9 2.403 -9 9c0 -6.597 -2.403 -9 -9 -9c6.597 0 9 -2.403 9 -9c0 6.597 2.403 9 9 9"}]];
const rig: Rig[] = [{"fx":"twinkle","n":[0],"o":[12,12]}];

export const SparkleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SparkleIcon.displayName = "SparkleIcon";
