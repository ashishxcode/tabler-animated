"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"}],["path",{"d":"M2 21v-6"}],["path",{"d":"M5 15v6"}],["path",{"d":"M2 18h3"}],["path",{"d":"M20 15v6h2"}],["path",{"d":"M13 21v-6l2 3l2 -3v6"}],["path",{"d":"M7.5 15h3"}],["path",{"d":"M9 15v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,5,6],"o":[17.5,12],"dl":0.05,"st":0.07},{"fx":"draw","n":[2,3,4,7,8],"o":[6.25,18],"dl":0.2},{"fx":"pop","n":[1],"o":[12,7.5],"a":0.04}];

export const FileTypeHtmlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTypeHtmlIcon.displayName = "FileTypeHtmlIcon";
