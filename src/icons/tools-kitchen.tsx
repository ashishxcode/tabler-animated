"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 3h8l-1 9h-6l-1 -9"}],["path",{"d":"M7 18h2v3h-2l0 -3"}],["path",{"d":"M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12"}],["path",{"d":"M20 15v6h-1v-3"}],["path",{"d":"M8 12l0 6"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4],"o":[12,21],"a":-16}];

export const ToolsKitchenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToolsKitchenIcon.displayName = "ToolsKitchenIcon";
