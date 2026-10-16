"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1l0 -8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1}];

export const BrandVisualStudioIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandVisualStudioIcon.displayName = "BrandVisualStudioIcon";
