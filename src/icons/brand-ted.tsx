"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 8h4"}],["path",{"d":"M4 8v8"}],["path",{"d":"M13 8h-4v8h4"}],["path",{"d":"M9 12h2.5"}],["path",{"d":"M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[11.5,12],"a":0.1}];

export const BrandTedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandTedIcon.displayName = "BrandTedIcon";
