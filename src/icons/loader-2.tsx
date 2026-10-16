"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a9 9 0 1 0 9 9"}]];
const rig: Rig[] = [{"fx":"spin","n":[0],"o":[12,12],"a":360}];

export const Loader2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Loader2Icon.displayName = "Loader2Icon";
