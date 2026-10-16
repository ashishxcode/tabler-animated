"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3l5 -3"}],["path",{"d":"M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.1}];

export const BrandNexoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandNexoIcon.displayName = "BrandNexoIcon";
