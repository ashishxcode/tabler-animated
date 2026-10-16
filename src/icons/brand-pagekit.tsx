"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.077 20h-5.077v-16h11v14h-5.077"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,12],"a":0.1}];

export const BrandPagekitIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandPagekitIcon.displayName = "BrandPagekitIcon";
