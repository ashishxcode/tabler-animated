"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10v8l7 -3v-2.6l-7 -2.4"}],["path",{"d":"M3 6l9 3l9 -3l-9 -3l-9 3"}],["path",{"d":"M14 12.3v8.7l7 -3v-8l-7 2.3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.1}];

export const BrandAirtableIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAirtableIcon.displayName = "BrandAirtableIcon";
