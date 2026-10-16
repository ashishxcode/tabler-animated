"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3h5l-.5 4.5m-.4 3.595l-.1 .905h-6l-.875 -7.874"}],["path",{"d":"M7 18h2v3h-2v-3"}],["path",{"d":"M15.225 11.216c.42 -2.518 1.589 -5.177 4.775 -8.216v12h-1"}],["path",{"d":"M20 15v1m0 4v1h-1v-2"}],["path",{"d":"M8 12v6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[19.5,18],"a":0.35,"dl":0.2},{"fx":"tilt","n":[0,1,2,4],"o":[12.06,21],"a":-16}];

export const ToolsKitchenOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToolsKitchenOffIcon.displayName = "ToolsKitchenOffIcon";
