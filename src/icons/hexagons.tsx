"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18v-5l4 -2l4 2v5l-4 2l-4 -2"}],["path",{"d":"M8 11v-5l4 -2l4 2v5"}],["path",{"d":"M12 13l4 -2l4 2v5l-4 2l-4 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.12}];

export const HexagonsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HexagonsIcon.displayName = "HexagonsIcon";
