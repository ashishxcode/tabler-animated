"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 14h14v-9h-14v16"}]];
const rig: Rig[] = [{"fx":"swing","n":[0],"o":[12,6],"a":7}];

export const Flag2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Flag2Icon.displayName = "Flag2Icon";
