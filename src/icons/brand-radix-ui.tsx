"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}],["path",{"d":"M6 3h5v5h-5l0 -5"}],["path",{"d":"M11 11v10a5 5 0 0 1 -.217 -9.995l.217 -.005"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12.5,12],"a":0.1}];

export const BrandRadixUiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandRadixUiIcon.displayName = "BrandRadixUiIcon";
