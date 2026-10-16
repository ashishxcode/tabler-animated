"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5"}],["path",{"d":"M9 9h1"}],["path",{"d":"M9 13h2.5"}],["path",{"d":"M9 17h1"}],["path",{"d":"M14 21v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M14 19h4"}],["path",{"d":"M21 15v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,5],"o":[16.5,12],"dl":0.05,"st":0.07},{"fx":"draw","n":[2,3,4,6,7],"o":[15,15],"dl":0.2},{"fx":"pop","n":[1],"o":[12,12],"a":0.04}];

export const FileTextAiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTextAiIcon.displayName = "FileTextAiIcon";
