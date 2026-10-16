"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M1 8h22v7h-12v2h-4v-2h-6l0 -7"}],["path",{"d":"M7 8v7"}],["path",{"d":"M14 8v7"}],["path",{"d":"M17 11v4"}],["path",{"d":"M4 11v4"}],["path",{"d":"M11 11v1"}],["path",{"d":"M20 11v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6],"o":[12,12.5],"a":0.1}];

export const BrandNpmIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandNpmIcon.displayName = "BrandNpmIcon";
