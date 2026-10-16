"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 9.75a3.016 3.016 0 0 0 -.711 -.466m-3.41 .596a2.993 2.993 0 0 0 -.042 4.197a3.016 3.016 0 0 0 4.163 .173"}],["path",{"d":"M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[11.98,12.02],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.5,12.14]]}];

export const CopyrightOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CopyrightOffIcon.displayName = "CopyrightOffIcon";
