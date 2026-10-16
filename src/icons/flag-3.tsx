"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16"}]];
const rig: Rig[] = [{"fx":"swing","n":[0],"o":[12,6],"a":7}];

export const Flag3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Flag3Icon.displayName = "Flag3Icon";
